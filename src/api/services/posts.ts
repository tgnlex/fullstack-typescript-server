
class Posts {
    static async add(post: Post) {
      await prisma.post.create({
        data: {
          title: post.title,
          content: post.content,
          published: post.published
        }
    })
  }
  static async all() {
    let posts = await prisma.Post.findMany({});
    if (posts) { return posts; } 
    else { console.info('No posts found..')}
  }
  static async find(id: number) {
  let posts = await prisma.Post.findUnique({
    where: {
      id: id,
    }                    
  })
  }
  static async published() {
    let posts = await prisma.Post.findMany({
      where: {
        published: true
      }
    })
    if (posts) { return posts; }
    else {console.info('No currently published posts found.')}
  }

  static async private() {
    let posts = await prisma.Post.findMany({
      where: {
        published: false
      }
    })
    if (posts) { return posts; }
    else {console.info('No currently drafted posts found.')}
  }
}

export default Posts;
