import { Contest } from '../entity/Contest';

export const isOwner = async (contestId: string, req: any) => {
  const contest = await Contest.findOne(contestId);
  if (!contest) {
    throw new Error("Contest doesn't exist");
  }
  if (contest?.creatorId !== req.session.userId) {
    throw new Error("Contest doesn't exist");
  }
};
