FROM node

ARG PROJECT
WORKDIR /opt/${PROJECT}/site

COPY ./ /opt/${PROJECT}

RUN npm install
RUN npm completion >> /root/.bashrc

COPY container-config/bashrc /root/.bashrc
COPY ./container-config/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint"]