# User
u1 = User.create(email: 'jjCocomelon@gmail.com', username: 'jj cocomlelon' ,password: 'jj', profile_img: 'N/A')
u2 = User.create(email: 'Joe@gmail.com', username: 'Joe', password: 'joe', profile_img: 'N/A')
u3 = User.create(email: 'tom@gmail.com', username: 'Tom', password: 'tom', profile_img: 'N/A')
u4 = User.create(email: 'jerry@gmail.com', username: 'Jerry', password: 'Jerry', profile_img: 'N/A')
u5 = User.create(email: 'ben10@gmail.com', username: 'Ben10', password: 'ben10', profile_img: 'N/A')
u6 = User.create(email: 'harrypotter@gmail.com', username: 'harry pootah', password: 'harry', profile_img: 'N/A')
u7 = User.create(email: 'never@gmail.com', username: 'nevergonnagiveuup', password: 'never', profile_img: 'N/A')
u8 = User.create(email: 'jonny@gmail.com', username: 'jonnynotbravo', password: 'jonny', profile_img: 'N/A')


#Topics
t2 = Topic.create(title: 'Male privilage is a myth', image: 'https://interactives.inquirer.com/projects/2022/09/gender-pay-equity/1663250247048/assets/hero.png')
t1 = Topic.create(title: 'There are only 2 Genders', image: 'https://news.illinoisstate.edu/files/2022/10/inclusivity-764x509.jpg')
t3 = Topic.create(title: 'Roe v. Wade', image: 'https://media.cnn.com/api/v1/images/stellar/prod/211213174706-newborn-texas-2020.jpg?q=h_2003,w_3000,x_0,y_0')
t4 = Topic.create(title: 'The moon landing is fake',image: 'https://images.interestingengineering.com/1200x675/filters:format(webp)/img/iea/r1OrJNLROn/apollo-moonlanding1.jpg')
t5 = Topic.create(title: 'God exists', image: 'https://w0.peakpx.com/wallpaper/332/346/HD-wallpaper-jesus-christ-heaven-christ-clouds-jesus.jpg')
t6 = Topic.create(title: 'Aliens exist', image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_06/1894401/170207-aliens-rhk-1646p.jpg')
t7 = Topic.create(title: 'The Earth is flat', image: 'https://assets.answersingenesis.org/img/cms/content/contentnode/og_image/reflections-flat-earth-movement.jpg'); 


#Posts
p1 = Post.create(content: "There seems to be a broad spectrum of reasons…and from the MOST common to the least common - I think it’s like this:

There are bible literalists who find passages in the bible which if taken LITERALLY do suggest that the world is flat and covered in a dome that’s made of water. It doesn’t matter how stupid or crazy or easily-disproven the idea is…if the Bible says it’s true…then that’s the end of the discussion.
There are people who live humdrum boring lives - who like the idea of being “special” - being one of the few who knows “the real truth”…same deal with people who lie about being abducted by aliens - or “knowing that the moon landings were faked”. These are sad people who need something to be “special”. The self-appointed “leaders” of groups such as the Flat Earth Society very definitely fall into this category.
There are people who simply aren’t very smart - and are easily able to be taken in by people with seemingly convincing arguments. The “Dunning Kreuger” effect is seen here too - people who know just enough about a subject to convince themselves that they are experts.
There are a group of people who don’t for one moment believe that the Earth is flat - but who enjoy the intellectual challenge of coming up with plausible explanations.
There are the trolls…there are always trolls. <sigh>", stance: 'for', user_id: u6.id, topic_id: t7.id)
p2 = Post.create(content: 'Never gonna give up, Never gonna let you down', stance: 'against', user_id: u7.id, topic_id: t7.id)
p3 = Post.create(content: "He’s protected me my enter life. He's surrounded me with people who hold the power to protect me my entire life, so each time they try to hurt me, they failed.

He's protected me when I overturned my car. I walked out a car without harm after it rolled over.

He's protected me from many tragedies while serving at the FDNY. I survived 911 and other tragedies at the FDNY, where other didn't.

He's blessed me. I have received countless blessings throughout life.

Hence, I will always believe in him.", stance: 'for', user_id: u5.id, topic_id: t7.id)

p4 = Post.create(content: "In a word, no.

Human beings, classed taxonomically as genus HOMO, first appeared somewhere around 2.8 million years ago. Modern man, classed taxonomically as HOMO Sapiens, first appeared a little over 200,000 years ago. Language developed during this time, as well as numerous other traits, such as development of agricultural societies and the reduction of the hunter-gatherer societies. The earliest indication of writing shows up about 5000 years ago, and at that time, humans began to have a written history that was much more accurate than the handing down of stories from generation to generation.

Prior to the development of writing, we have no record of how many religions existed. Since then, we have seen literally thousands of religions come and go, with somewhat over 4000 religions being active today.

In all of this time, not a single one of those religions, active or dead, has ever shown conclusive proof of the existence of a god of any kind.", stance: 'against', user_id: u4.id, topic_id: t7.id)



p5 = Post.create(content: "Yes absolutely!!!! I believe in aliens because I once hit total rock bottom!! That is when I cried out to god and I didn't stop daily i felt his presence all over me it was the most peaceful magical feeling i have ever felt! He was holding me and felt him surrounded my whole body I changed my whole entire life around I am now doing way better in life with jesus by my side daily! I always tried to fill the void in my heart with sex,drugs,men, the evils of this world and nothing seemed to make me completely happy I just couldn't figure out why ……I had a whole in my heart that nothing filled it until I filled it with jesus christ,,,sounds crazy right??? Its a feeling out of this world better than any high from drugs evilness that's why I believe and trust in jesus christ as my lord and savior", stance: 'for', user_id: u5.id, topic_id: t7.id)
p6 = Post.create(content: 'Never gonna give up, Never gonna let you down', stance: 'against', user_id: u7.id, topic_id: t7.id)
p7 = Post.create(content: "He’s protected me my enter life. He's surrounded me with people who hold the power to protect me my entire life, so each time they try to hurt me, they failed.

He's protected me when I overturned my car. I walked out a car without harm after it rolled over.

He's protected me from many tragedies while serving at the FDNY. I survived 911 and other tragedies at the FDNY, where other didn't.

He's blessed me. I have received countless blessings throughout life.

Hence, I will always believe in him.", stance: 'for', user_id: u3.id, topic_id: t7.id)

p8 = Post.create(content: "In a word, no.

Human beings, classed taxonomically as genus HOMO, first appeared somewhere around 2.8 million years ago. Modern man, classed taxonomically as HOMO Sapiens, first appeared a little over 200,000 years ago. Language developed during this time, as well as numerous other traits, such as development of agricultural societies and the reduction of the hunter-gatherer societies. The earliest indication of writing shows up about 5000 years ago, and at that time, humans began to have a written history that was much more accurate than the handing down of stories from generation to generation.

Prior to the development of writing, we have no record of how many religions existed. Since then, we have seen literally thousands of religions come and go, with somewhat over 4000 religions being active today.

In all of this time, not a single one of those religions, active or dead, has ever shown conclusive proof of the existence of a god of any kind.", stance: 'against', user_id: u2.id, topic_id: t7.id)


