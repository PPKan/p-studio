# studio-p

[check here](http://ubuntu@ec2-54-92-196-184.compute-1.amazonaws.com)

A memo to myself

1. Finish main and routes
3. Apply RWDs including smartphones
2. Add animations
4. Online -> Amazon aws ec2 with NGINX
6. Add CMS
5. Add languages through CMS

Do whenever I have time:
Add pictures (especially replace the unsplash ones)
Change pictures
Add more animations

deploy: 
npm run build
scp -r -i ~/.ssh/p-studio.pem dist/* ubuntu@ec2-54-92-196-184.compute-1.amazonaws.com:~/scp-temp
ssh -i "p-studio.pem" ubuntu@ec2-54-92-196-184.compute-1.amazonaws.com
sudo rm -rf /var/www/p-studio-static/*
sudo mv scp-temp/* /var/www/p-studio-static/
sudo service nginx restart