import { useQuery } from '@tanstack/react-query';

import { mockCourses } from '@/constants/mockData';

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockCourses;
    },
  });
};
