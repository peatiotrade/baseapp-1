import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo = require('../../../assets/images/logo.svg');
import logoLight = require('../../../assets/images/logoLight.svg');
import { VersionGuardWrapper } from '../../../decorators';
import { setDocumentTitle } from '../../../helpers';
import {
    alertPush,
    Label,
    labelFetch,
    RootState,
    selectCurrentColorTheme,
    selectLabelData,
    selectUserInfo,
    User,
} from '../../../modules';
import { changeUserLevel } from '../../../modules/user/profile';
import { BlockNationalityModal } from '../../components';
import { Documents } from '../../containers/Confirm/Documents';
import { Idenfy } from '../../containers/Confirm/Idenfy';
import { Phone } from '../../containers/Confirm/Phone';
import { ProfilePartial } from '../../containers/Confirm/ProfilePartial';
import { Questionnaire } from '../../containers/Confirm/Questionnaire';

interface ReduxProps {
    colorTheme: string;
    userData: User;
    labels: Label[];
}

interface HistoryProps {
    history: History;
}

interface DispatchProps {
    changeUserLevel: typeof changeUserLevel;
    fetchAlert: typeof alertPush;
    labelFetch: typeof labelFetch;
}

interface ConfirmState {
    title: string;
    level: number;
    kycAlert: boolean;
    documentsAlert: boolean;
    showNationalityBlockModal: boolean;
}

type Props = ReduxProps & HistoryProps & DispatchProps;

class ConfirmComponent extends React.Component<Props, ConfirmState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            level: 0,
            kycAlert: false,
            documentsAlert: false,
            showNationalityBlockModal: false,
        };
    }

    public componentDidMount() {
        setDocumentTitle('Confirm');
        this.props.labelFetch();
        const { userData } = this.props;
        this.setState({
            level: userData.level,
        });
    }

    public goBack = event => {
      event.preventDefault();
      this.props.history.push('/profile');
    };

    // tslint:disable:jsx-no-multiline-js
    public render() {
        const { colorTheme, userData } = this.props;
        const { showNationalityBlockModal } = this.state;

        const currentProfileLevel = userData.level;
        const cx = classnames('pg-confirm__progress-items', {
            'pg-confirm__progress-first': currentProfileLevel === 0 || currentProfileLevel === 2 || currentProfileLevel === 4,
            'pg-confirm__progress-second': currentProfileLevel === 1 || currentProfileLevel === 3 || currentProfileLevel === 5,
        });

        const stepLabels = this.handleGetStepLabels(currentProfileLevel);

        return (
            <div className="pg-wrapper">
                <div className="pg-logo">
                    {colorTheme === 'light' ? (
                        <img src={logoLight} className="pg-logo__img" alt="Logo" />
                    ) : (
                        <img src={logo} className="pg-logo__img" alt="Logo" />
                    )}
                </div>
                <div className="pg-confirm">
                    <div className="pg-confirm-box">
                        <a
                            href="#"
                            onClick={this.goBack}
                            className="pg-confirm-box-close"
                        />
                        <div className="pg-confirm__progress">
                            <div className={cx}>
                                <div className="pg-confirm__progress-circle-1">
                                    <span className="pg-confirm__title-text pg-confirm__active-1">
                                    <FormattedMessage id={stepLabels[0]}/>
                                    </span>
                                </div>
                                <div className="pg-confirm__progress-line-1" />
                                <div className="pg-confirm__progress-circle-2">
                                    <span className="pg-confirm__title-text pg-confirm__active-2">
                                    <FormattedMessage id={stepLabels[1]}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="pg-confirm__content">
                            {VersionGuardWrapper(this.renderContent, Phone)}
                        </div>
                    </div>
                </div>
                {showNationalityBlockModal ? (
                    <BlockNationalityModal
                        className="pg-block-nationality-modal"
                        toggleModal={this.handleToggleBlockNationalityModal}
                    />
                ) : null}
            </div>
        );
    }
    //tslint:enable:jsx-no-multiline-js

    private handleToggleBlockNationalityModal = () => {
        this.setState(prevState => ({
            showNationalityBlockModal: !prevState.showNationalityBlockModal,
        }));
    }

    private handleGetStepLabels = (currentProfileLevel: number): string[] => {
        const { history } = this.props;
        if (history.location && history.location.state && history.location.state.profileEdit) {
            return ['page.body.kyc.head.level.first', 'page.body.kyc.head.level.second'];
        }

        switch (currentProfileLevel) {
            case 0:
            case 1:
                return ['page.body.kyc.head.level.first', 'page.body.kyc.head.level.second'];
            case 2:
            case 3:
                return ['page.body.kyc.head.level.third', 'page.body.kyc.head.level.fourth'];
            case 4:
            case 5:
                return ['page.body.kyc.head.level.fifth', 'page.body.kyc.head.level.sixth'];
            default:
                return ['page.body.kyc.head.level.first', 'page.body.kyc.head.level.second'];
        }
    }

    private handleCheckPendingLabels = (labels: Label[]) => {
        const { history, fetchAlert } = this.props;
        const labelsToCheck = [
            'email',
            'profile',
            'phone',
            'identity',
            'document',
            'questionnaire',
        ];

        const pendingLabel = labels.find(l => labelsToCheck.includes(l.key) && l.value === 'pending' && l.scope === 'private');

        if (pendingLabel) {
            fetchAlert({ message: [`resource.profile.${pendingLabel.key}`], type: 'error'});
            history.push('/profile');
        }
    }

    private renderContent = () => {
        const {
            history,
            labels,
            userData: { level },
            fetchAlert,
        } = this.props;

        if (!labels.length) {
            return null;
        }

        this.handleCheckPendingLabels(labels);

        if (level === 1 || (history.location && history.location.state && history.location.state.profileEdit)) {
            return <ProfilePartial toggleBlockNationalityModal={this.handleToggleBlockNationalityModal} />;
        }

        if (level === 2) {
            return <Phone />;
        }

        if (level === 3) {
            const kycDenied = labels.find(label => label.key === 'identity' && label.value === 'denied' && label.scope === 'private');
            const kycApproved = labels.find(label => label.key === 'identity' && label.value === 'approved' && label.scope === 'private');

            if (kycDenied && !this.state.kycAlert) {
                fetchAlert({ message: ['resource.profile.kyc.denied'], type: 'error' });
                this.setState({
                    kycAlert: true,
                });
            }

            if (kycApproved) {
                this.props.changeUserLevel({ level: 4 });
                return <Documents />;
            }

            return <Idenfy />;
        }

        if (level === 4) {
            const documentsVerification = labels.find(label => label.key === 'document' && label.value === 'rejected' && label.scope === 'private');

            if (documentsVerification && !this.state.documentsAlert) {
                fetchAlert({ message: ['resource.profile.document.denied'], type: 'error' });
                this.setState({
                    documentsAlert: true,
                });
            }

            return <Documents />;
        }

        if (level === 5) {
            return <Questionnaire />;
        }

        history.push('/profile');

        return null;
    };
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    colorTheme: selectCurrentColorTheme(state),
    userData: selectUserInfo(state),
    labels: selectLabelData(state),
});

const mapDispatchToProps = dispatch => ({
    changeUserLevel: payload => dispatch(changeUserLevel(payload)),
    fetchAlert: payload => dispatch(alertPush(payload)),
    labelFetch: () => dispatch(labelFetch()),
});

// tslint:disable-next-line
export const ConfirmScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmComponent) as any);
