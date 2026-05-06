import StageDetailClient from './stage-detail-client';

export default async function StageDetailPage({ params }: { params: Promise<{ stageId: string }> }) {
  const { stageId } = await params;
  return <StageDetailClient stageId={stageId} />;
}

