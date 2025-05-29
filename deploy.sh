git pull
sudo docker stop tw-voucher
sudo docker rm tw-voucher
sudo docker build -t tw-voucher .
sudo docker run -d -p 9958:3000 --name tw-voucher tw-voucher