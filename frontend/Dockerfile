# For this particular application
# pehle install Node
# then Copy files
# Start kar do

# Base Image: Sabse pehli layer computer ki, yaha tak kaam already milega
# Ubuntu 22, Node (ka koi version), Python ka koi version, Postgres ka koi version, MongoDB, 


FROM node:18

WORKDIR /app/holiday_frontend
# Docker wale computer ke home se /folder_application ka jo path hai, waha pe kaam karenge

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
#
# docker build [Options] <Dockerfile ka path>
# docker build -t folder_app .


# Docker run wale options:
# volume => -v <LOCATION ON DOCKER>:<LOCALTION ON MY PC>
# Port => -p Mere comp ka port: docker ka port
# Name => --name <Koi naam>
# Detach mode => -d

# docker run -p 3000:3000 --name pehla_docker folder_appluxmi@Vivobook-ASUS:~/Desktop/docker_folder$ 

##  docker exec -it ollama ollama run deepseek-r1:1.5b
# docker exec -it <Container naam> <Command>

# Run some commands inside docker container
# Imagine karo, Container = ek computer, jisme ek particular software (Image) hi chalta ho 
# Docker exec se, wo particular computer lekar usme commands daalte hai


# Docker compose
# docker compose up -> Chala dega docker-compose.yml wale containers
# docker compose down -> Band kar dega docker-compose.yml wale containers



# Pehle
# MongoDB chalaaya ek computer pe, uska 27017 port map kar dia apne comp ke 27017 pe
# To fir, apne computer ke 27017 jaakar, mongo wale computer ki cheeze access ho rahi thi

# 0.0.0.0 is a local address

# mongodb chal raha 0.0.0.0:27017

# docker compose me jo backend hai, uska aona IP hai
# Humne map 27017 APNE PC pe map kia, na ki docker ke backend container wale pe 