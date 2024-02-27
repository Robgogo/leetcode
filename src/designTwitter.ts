class Twitter {
  private createdTime: number;
  private tweets: Map<number, number[][]>;
  private followers: Map<number, Set<number>>;

  constructor() {
    this.createdTime = 0;
    this.tweets = new Map();
    this.followers = new Map();
  }

  postTweet(userId: number, tweetId: number): void {
    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }
    this.tweets.get(userId)?.unshift([tweetId, this.createdTime]);
    this.createdTime++;
  }

  getNewsFeed(userId: number): number[] {
    const newsFeed: number[][] = [];
    if (this.tweets.has(userId)) {
      newsFeed.push(...(this.tweets.get(userId) || []));
    }
    if (this.followers.has(userId)) {
      for (const followerId of this.followers.get(userId) || []) {
        if (this.tweets.has(followerId)) {
          newsFeed.push(...(this.tweets.get(followerId) || []));
        }
      }
    }

    newsFeed.sort((a: number[], b: number[]) => b[1] - a[1]);

    return newsFeed.slice(0, 10).map((feed) => feed[0]);
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.followers.has(followerId)) {
      this.followers.set(followerId, new Set());
    }
    this.followers.get(followerId)?.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.followers.has(followerId)) {
      this.followers.get(followerId)?.delete(followeeId);
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

const obj = new Twitter();
obj.postTweet(1, 5);
const param_2 = obj.getNewsFeed(1);
obj.follow(1, 2);
obj.postTweet(2, 6);
const param_3 = obj.getNewsFeed(1);
obj.unfollow(1, 2);
const param_4 = obj.getNewsFeed(1);

console.log(param_2, param_3, param_4);
