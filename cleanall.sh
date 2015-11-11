#!/bin/sh

# Show what we execute
set -x

cd ../../../../../../vagrant-magento2-apache-base

vagrant ssh -- sh /vagrant/scripts/cleanall.sh

cd -




