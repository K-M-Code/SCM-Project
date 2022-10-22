echo -n "Creating SSH tunnel to $HOST... "

ssh -NL 3306:mariadb.vamk.fi:3306 e2002009@shell.puv.fi


echo "Done!"