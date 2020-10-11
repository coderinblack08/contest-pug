import { Contest } from '../entity/Contest';

export const contestInSession = (contest: Contest) =>
  contest.open
    ? true
    : new Date().getTime() > new Date(contest.startDate).getTime() &&
      new Date().getTime() < new Date(contest.endDate).getTime();
