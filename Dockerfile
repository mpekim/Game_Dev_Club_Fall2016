# Dockerfile

FROM ubuntu:20.04
RUN apt update && apt install -y sbcl

WORKDIR /app

EXPOSE 9999
COPY ./app/index.html ..