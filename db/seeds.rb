# User
u1 = User.create(email: 'jonnybiruk13@gmail.com', username: 'jonnynotbravo' ,password: 'jonny', profile_img: 'N/A')
u2 = User.create(email: 'Ruth13@gmail.com', username: 'Ruth', password: 'ruth', profile_img: 'N/A')
u3 = User.create(email: 'tom@gmail.com', username: 'Tom', password: 'tom', profile_img: 'N/A')
u4 = User.create(email: 'jerry@gmail.com', username: 'Jerry', password: 'Jerry', profile_img: 'N/A')


#Topics
t2 = Topic.create(title: 'Male privilage is a myth', image: 'https://interactives.inquirer.com/projects/2022/09/gender-pay-equity/1663250247048/assets/hero.png')
t1 = Topic.create(title: 'There are only 2 Genders', image: 'https://news.illinoisstate.edu/files/2022/10/inclusivity-764x509.jpg')
t3 = Topic.create(title: 'Roe v. Wade', image: 'https://media.cnn.com/api/v1/images/stellar/prod/211213174706-newborn-texas-2020.jpg?q=h_2003,w_3000,x_0,y_0')
t4 = Topic.create(title: 'The moon landing is fake',image: 'https://images.interestingengineering.com/1200x675/filters:format(webp)/img/iea/r1OrJNLROn/apollo-moonlanding1.jpg')
t5 = Topic.create(title: 'God exists', image: 'https://w0.peakpx.com/wallpaper/332/346/HD-wallpaper-jesus-christ-heaven-christ-clouds-jesus.jpg')
t6 = Topic.create(title: 'Aliens exists', image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_06/1894401/170207-aliens-rhk-1646p.jpg')
t7 = Topic.create(title: 'The Earth is flat', image: 'https://assets.answersingenesis.org/img/cms/content/contentnode/og_image/reflections-flat-earth-movement.jpg'); 








#Posts
p1 = Post.create(content: 'This is the first post for', stance: 'for', user_id: u1.id, topic_id: t5.id)
p2 = Post.create(content: 'This is  the first post against', stance: 'against', user_id: u2.id, topic_id: t5.id)
p3 = Post.create(content: 'This is the the third post for', stance: 'for', user_id: u3.id, topic_id: t5.id)
p4 = Post.create(content: 'This is the the third post against', stance: 'against', user_id: u4.id, topic_id: t5.id)
