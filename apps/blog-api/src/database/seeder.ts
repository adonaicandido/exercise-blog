import "dotenv/config"
import { DataSource } from "typeorm"

import { Category } from "../posts/entities/category.entity"
import { Post } from "../posts/entities/post.entity"
import { User } from "../users/user.entity"

const dataSource = new DataSource({
  logging: true,
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: "blog",
  synchronize: true,
  entities: [Category, Post, User],
})

const johndoe = new User()
johndoe.name = "John Doe"
johndoe.username = "johndoe"
johndoe.password_hash = "$2b$10$HGj8O33Gl/Hq7ZQqY0ICO.Bkefw4NTln/3/GHr.yk/HARhP48CnCm"
johndoe.pictureUrl =
  "https://images.generated.photos/WkYSg7Is3py16RZ4wMaK26pNmfER0Uo9tjMipCZkwB0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ3MTE0LmpwZw.jpg"

const janedoe = new User()
janedoe.name = "Jane Doe"
janedoe.username = "janedoe"
janedoe.password_hash = "$2b$10$HGj8O33Gl/Hq7ZQqY0ICO.Bkefw4NTln/3/GHr.yk/HARhP48CnCm"
janedoe.pictureUrl =
  "https://images.generated.photos/OrCDkVeKfmVsSx6uQT1aA_xrT9ynVNVoxPBIYPT-tLs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ1MjE5XzA1MDU4/MjJfMDY1NDM2My5q/cGc.jpg"

const smithjr = new User()
smithjr.name = "Smith Junior"
smithjr.username = "smithjr"
smithjr.password_hash = "$2b$10$HGj8O33Gl/Hq7ZQqY0ICO.Bkefw4NTln/3/GHr.yk/HARhP48CnCm"
smithjr.pictureUrl =
  "https://images.generated.photos/iFce-JzNBp2rVRm4uk1XcBj_TkGmlGCH_vHVCBqy_m0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ3ODc4XzA5Mjgy/MTJfMDczMTU2NS5q/cGc.jpg"

const lifestyle = new Category()
lifestyle.name = "Lifestyle"

const health = new Category()
health.name = "Health"

const grooming = new Category()
grooming.name = "Grooming"

const behavior = new Category()
behavior.name = "Behavior"

const post1 = new Post()
post1.slug = "perfect-cat-your-life-style"
post1.title = "Choosing the Perfect Cat Breed for Your Lifestyle"
post1.excerpt =
  "Bringing a cat into your home is an exciting decision, but with so many breeds to choose from, where do you start? This guide delves into factors like activity level, grooming needs, and temperament to help you find the ideal feline companion that matches your lifestyle and preferences."
post1.published = true
post1.thumbnailUrl = "https://i.ytimg.com/vi/YSHDBB6id4A/maxresdefault.jpg"
post1.author = johndoe
post1.category = lifestyle

const post2 = new Post()
post2.slug = "cat-friendly-enviroment"
post2.title = "Creating a Cat-Friendly Home Environment"
post2.excerpt =
  "Designing your living space with your cat in mind enhances their well-being and your bond. Discover tips on setting up cozy resting spots, providing engaging enrichment activities, and making your home safe for your furry friend to explore and play in."
post2.published = true
post2.thumbnailUrl =
  "https://s.yimg.com/ny/api/res/1.2/C5uryMno9srLXTTHJWNllw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://s.yimg.com/os/en_US/News/BGR_News/funny-cat.jpg"
post2.author = janedoe
post2.category = health

const post3 = new Post()
post3.slug = "mastering-cat-grooming"
post3.title = "Mastering Cat Grooming: Tips and Techniques"
post3.excerpt =
  "Grooming isn't just about keeping your cat's coat looking sleek – it's essential for their health too. Dive into a comprehensive guide on grooming methods, tools, and frequency, tailored to different coat lengths and textures. Learn how to make grooming a positive experience for both you and your feline friend."
post3.published = true
post3.thumbnailUrl =
  "https://hips.hearstapps.com/hmg-prod/images/funny-cat-captions-1563551842.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=1200:*"
post3.author = smithjr
post3.category = grooming

const post4 = new Post()
post4.slug = "decoding-cat-behavior"
post4.title = "Decoding Cat Behavior: Insights into their Quirks"
post4.excerpt =
  "Cats are known for their unique behaviors, from kneading to head-bunting. Uncover the reasons behind these actions and gain insight into the psychology of your cat. With a better understanding of their behaviors, you'll nurture a stronger connection with your pet."
post4.published = true
post4.thumbnailUrl =
  "https://e0.pxfuel.com/wallpapers/910/30/desktop-wallpaper-cute-cat-cute-cat-weird-cat-thumbnail.jpg"
post4.author = johndoe
post4.category = behavior

const post5 = new Post()
post5.slug = "introducting-cats-and-dogs"
post5.title = "Introducing Cats and Dogs: Building Harmony in a Multi-Pet Household"
post5.excerpt =
  "If you have both cats and dogs at home, fostering a peaceful coexistence is key. This article provides strategies for gradual introductions, managing territorial behaviors, and creating a harmonious atmosphere where both species can thrive."
post5.published = false
post5.thumbnailUrl =
  "https://imgix.ranker.com/list_img_v2/12346/2292346/original/30-and-funny-cat-selfies-you-ll-wish-your-cat-took-u1?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720"
post5.author = janedoe
post5.category = behavior

dataSource
  .initialize()
  .then(async () => {
    const categoriesRepository = dataSource.getRepository(Category)
    const postsRepository = dataSource.getRepository(Post)
    const usersRepository = dataSource.getRepository(User)

    await usersRepository.save([johndoe, janedoe, smithjr])
    await categoriesRepository.save([lifestyle, health, grooming, behavior])
    await postsRepository.save([post1, post2, post3, post4, post5])
  })
  .catch((error) => console.log(error))
  .finally(() => dataSource.destroy())
