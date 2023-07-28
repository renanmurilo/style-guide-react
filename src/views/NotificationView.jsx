import Notification from "../components/Notificacoes";

const NotificationView = () => {
  return <>
    <div className="container__wrapper gap">
      <Notification className='success' titulo='Sucess Notification' text='Sucess Message' />
      <Notification className='warning' titulo='Warning  Notification' text='Warning Message' />
      <Notification className='error' titulo='Error Notification' text='Error Message' />
    </div>
  </>
}
export default NotificationView;
