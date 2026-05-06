import PlayClient from './play-client';

export default async function PlayPage({ params }: { params: Promise<{ stageId: string }> }) {
  const { stageId } = await params;
  return <PlayClient stageId={stageId} />;
}

