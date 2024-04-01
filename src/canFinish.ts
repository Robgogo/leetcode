function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree: number[] = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length > 0) {
    const course = queue.shift()!;
    count++;

    for (const nextCourse of graph[course]) {
      indegree[nextCourse]--;
      if (indegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return count === numCourses;
}
