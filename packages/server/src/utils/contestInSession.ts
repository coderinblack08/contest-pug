import { Contest } from '../entity/Contest';

export const contestInSession = (contest: Contest) =>
  contest.open
    ? true
    : new Date().getSeconds() < new Date(contest.endDate).getSeconds() &&
      new Date().getSeconds() > new Date(contest.startDate).getSeconds();
