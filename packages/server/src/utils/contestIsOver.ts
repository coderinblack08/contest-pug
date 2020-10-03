import { Contest } from '../entity/Contest';

export const contestIsOver = (contest: Contest) =>
  contest.open
    ? false
    : new Date().getSeconds() > new Date(contest.endDate).getSeconds();
