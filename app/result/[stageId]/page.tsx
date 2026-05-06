import ResultClient from './result-client';

export default async function ResultPage({ params }: { params: Promise<{ stageId: string }> }) {
  const { stageId } = await params;
  return <ResultClient stageId={stageId} />;
}

