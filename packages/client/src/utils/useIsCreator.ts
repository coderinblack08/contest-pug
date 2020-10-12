import { useGetContestQuery, useMeQuery } from '../generated/graphql';

export const useIsCreator = (id: string) => {
  const { data: me } = useMeQuery();
  const { data: contest } = useGetContestQuery({
    variables: { contestId: id },
  });
  if (!me?.me) {
    return false;
  }
  return contest?.getContest?.creator.id === me?.me!.id;
};
