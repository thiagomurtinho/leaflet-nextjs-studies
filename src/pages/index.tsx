import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./Map'), { ssr: false });

function Index() {
  return <MapComponent />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default Index;
