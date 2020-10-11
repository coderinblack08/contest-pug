import { Contest } from '../entity/Contest';

export const isOwner = async (contestId: string, req: any) => {
  const contest = await Contest.findOne(contestId);
  if (!contest) {
    throw new Error("Contest doesn't exist");
  }
  console.log(contest?.creatorId, req.session.userId);
  if (contest?.creatorId !== req.session.userId) {
    throw new Error('Not owner of contest');
  }
};
