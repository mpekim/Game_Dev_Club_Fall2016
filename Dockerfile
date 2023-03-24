# Dockerfile

#FROM ubuntu:20.04
#RUN apt update && apt install -y sbcl

#WORKDIR /app

#EXPOSE 9999
#COPY ./app/index.html ..
#RUN echo "Dockerfile container created."

FROM alpine
WORKDIR /root/git_projects/Game_Dev_Club_Fall2016

COPY HelloWorld.java /root/git_projects/Game_Dev_Club_Fall2016

RUN apk add openjdk8
ENV JAVA_HOME /usr/lib/jvm/java-1.8-add-openjdk
ENV PATH $PATH:$JAVA_HOME/bin

RUN javac HelloWorld.java

ENTRYPOINT java HelloWorld