import { Contestant } from '../entity/Contestant';

export const isMember = async (contestId: string, req: any) => {
  const contestant = await Contestant.findOne({
    contestId,
    userId: req.session.userId,
  });

  console.log('CONTESTANT ' + JSON.stringify(contestant));

  if (!contestant) {
    throw new Error("Contestant doesn't exist");
  }
};
