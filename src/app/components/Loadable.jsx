import { Suspense } from 'react';
import Loading from './MatxLoading';

const Loadable = (Component) => (props) => {
  debugger
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
