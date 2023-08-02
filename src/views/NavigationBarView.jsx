import { NavigationBar } from '../components/NavigationBar';

const NavigationBarView = () => {
  return (
    <>
      <NavigationBar size={'small'} />
      <br />
      <NavigationBar size={'medium'} />
      <br />
      <NavigationBar size={'large'} />
    </>
  );
};

export default NavigationBarView;
