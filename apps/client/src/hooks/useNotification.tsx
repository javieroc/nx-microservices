import { notification } from 'antd';
import { DEFAULTS } from '../constants';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const useNotification = () => {
  return (type: NotificationType, title: string, description: string) => {
    notification[type]({
      message: title,
      description,
      duration: DEFAULTS.NOTIFICATION_DURATION
    })
  }
}

export { useNotification };
