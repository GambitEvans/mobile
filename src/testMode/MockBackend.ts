import {TemporaryExposureKey} from 'bridge/ExposureNotification';
import {BackendInterface, SubmissionKeySet} from 'services/BackendService';

const DefaultConfiguration = {
  minimumRiskScore: 0,
  attenuationLevelValues: [1, 2, 3, 4, 5, 6, 7, 8],
  attenuationWeight: 50,
  daysSinceLastExposureLevelValues: [1, 2, 3, 4, 5, 6, 7, 8],
  daysSinceLastExposureWeight: 50,
  durationLevelValues: [1, 2, 3, 4, 5, 6, 7, 8],
  durationWeight: 50,
  transmissionRiskLevelValues: [1, 2, 3, 4, 5, 6, 7, 8],
  transmissionRiskWeight: 50,
};

class MockBackend implements BackendInterface {
  claimOneTimeCodeResponse = false;

  claimOneTimeCode = async (_code: string) => {
    if (!this.claimOneTimeCodeResponse) {
      throw new Error('Invalid code');
    }
    return {
      clientPrivateKey: 'clientPrivateKey',
      clientPublicKey: 'clientPublicKey',
      serverPublicKey: 'serverPublicKey',
    };
  };

  reportDiagnosisKeys = async (_submissionKeyPair: SubmissionKeySet, _keys: TemporaryExposureKey[]) => {};

  retrieveDiagnosisKeysByDay = async (_sinceDate: Date) => {
    return [];
  };

  retrieveDiagnosisKeysByHour = async (_sinceDate: Date) => {
    return [];
  };

  getExposureConfiguration = async () => {
    return DefaultConfiguration;
  };
}

export default MockBackend;
