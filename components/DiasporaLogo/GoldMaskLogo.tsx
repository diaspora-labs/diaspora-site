// import Spline from '@splinetool/react-spline';
import dynamic from 'next/dynamic';


const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function GoldMaskLogo() {
  return (
      <Spline scene="https://prod.spline.design/z9ZrPk6mKAs97Rxq/scene.splinecode" />
  );
}


