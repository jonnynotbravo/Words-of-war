

# User
u1 = User.create(email: 'jonnybiruk13@gmail.com', username: 'jonnynotbravo' ,password: 'jonny', profile_img: 'N/A')
u2 = User.create(email: 'Ruth13@gmail.com', username: 'Ruth', password: 'ruth', profile_img: 'N/A')


#Topics
t1 = Topic.create(title: 'The Earth is flat'); 
t2 = Topic.create(title: 'There are only 2 Genders')
t3 = Topic.create(title: 'The moon landing is fake')
t4 = Topic.create(title: 'God exists')
t5 = Topic.create(title: 'Aliens exists')


#Posts
p1 = Post.create(content: 'This is the first post for', stance: 'for', user_id: u1.id, topic_id: t5.id)
p2 = Post.create(content: 'This is  the first post against', stance: 'against', user_id: u2.id, topic_id: t5.id)
