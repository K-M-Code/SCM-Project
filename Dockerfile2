FROM ubuntu:20.04

ARG PRIVATE_KEY=id_rsa.pub

RUN apt-get update -qq && \
    apt-get install -y -qq openssh-client && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir ~/.ssh && \
  echo "Host *" > ~/.ssh/config && \
  echo "  StrictHostKeyChecking accept-new" >> ~/.ssh/config && \
  echo "  ControlMaster auto" >> ~/.ssh/config && \
  echo "  ControlPath ~/.ssh/%r@%h:%p" >> ~/.ssh/config

RUN touch ~/.ssh/authorized_keys

COPY id_rsa.pub ~/.ssh/id_rsa.pub

RUN chmod 700 ~/.ssh 

RUN cat 

# RUN service ssh restart

RUN apt-get update -qq && \
    apt-get install -y net-tools

RUN apt-get update -qq && \
    apt-get install -y nano

# RUN apt-get update -qq && \
#     apt-get install -y sshpass

# RUN apt-get update -qq && \
#     apt-get install -y openjdk-17-jdk openjdk-17-jre

# RUN sleep 60

COPY tunnel-mysql.sh .

CMD ./tunnel-mysql.sh

# RUN cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys


EXPOSE 80 3306 8080

# CMD ["ssh", "-NL", "3306:mariadb.vamk.fi:3306", "e2002009@shell.puv.fi"]

# RUN ssh -NL 3306:mariadb.vamk.fi:3306 e2002009@shell.puv.fi

# RUN netstat

# RUN echo -n "Connected to MariaDB"

FROM openjdk:17
ARG JAR_FILE=scm-server/target/server-0.0.1-SNAPSHOT.jar
ARG WEBAPP_DIR=scm-client/build
COPY ${JAR_FILE} server.jar
COPY ${WEBAPP_DIR} .

ENTRYPOINT ["java","-jar","/server.jar"]