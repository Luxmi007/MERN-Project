# For this particular application
# pehle install Node
# then Copy files
# Start kar do

# Base Image: Sabse pehli layer computer ki, yaha tak kaam already milega
# Ubuntu 22, Node (ka koi version), Python ka koi version, Postgres ka koi version, MongoDB, 


FROM node:18

WORKDIR /app/holiday_backend
# Docker wale computer ke home se /folder_application ka jo path hai, waha pe kaam karenge

COPY . .

RUN npm install

EXPOSE 3001

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


# docker exec -it <Container naam> <Command>

# Run some commands inside docker container
# Imagine karo, Container = ek computer, jisme ek particular software (Image) hi chalta ho 
# Docker exec se, wo particular computer lekar usme commands daalte hai


# structure of docker compose:
        # --name:
#    image: image ka naam
#    build: Dockerfile ka pata, jiski image banaani (isme ya image me ek) 
#    ports:
      # - 'd'
