FROM php:7.1-apache
RUN a2enmod rewrite
RUN a2enmod ssl

RUN apt-get update -y && apt-get install -y openssl  zip unzip bzip2 mysql-client

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-install pdo_mysql

EXPOSE 80

RUN service apache2 start

WORKDIR /var/www/html/

COPY . /var/www/html/

COPY ./apacheconf/ /etc/apache2/sites-available/
