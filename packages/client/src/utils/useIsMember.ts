import { useGetContestQuery } from '../generated/graphql';

export const useIsMember = (id: string) => {
  const { data: contest } = useGetContestQuery({
    variables: { contestId: id },
  });
  return contest?.getContest?.isContestant;
};
