# Nodeschool/Bratislava

<img alt="NodeSchool Bratislava Logo" src="https://raw.githubusercontent.com/nodeschool/bratislava/master/assets/logo/nodeschool_ba.png" width="400">

Feel free lurk public chatroom @
[![Join the chat at https://gitter.im/nodeschool/bratislava](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodeschool/bratislava?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Upcoming NodeSchool/Bratislava meetup

planned at **23.1.2015** as *all-day* event in **Progressbar** [(Michalská 3, Bratislava)](https://www.google.com/maps?q=michalska+3,+bratislava).


Please tell us, if you are comming to meetup at
**[this thread (issue)](https://github.com/nodeschool/bratislava/issues/9)**


##### Sponsors are welcome!

##### Pull Requests are welcome!

### [Knowledge Library](https://github.com/nodeschool/bratislava/tree/master/library)
*credits for logo goes to [d14](https://twitter.com/d14)*

# Newcomer to meetup?

Would be good if you can setup your enviroment before meetup, so you can save some time.
Read instructions below and if you are having some problems, feel free to open issue or visit us at chat  [![Join the chat at https://gitter.im/nodeschool/bratislava](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodeschool/bratislava?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installing NodeJS

For obvious reasons, having NodeJS installed on your work machine is a must. :smile:

##### Windows

Using Windows 10, however, workflow should be similar for most versions.

* download v4.2.2 from https://nodejs.org/en/ (5.1.0 has problems with npm and VS2015)
* install it regularly

Open up terminal (Windows + R -> 'cmd' -> Enter) and type `node -v`. If it works, you are good to go and you can ignore the stuff below. Otherwise, continue.

* open up **This PC**
* in that window, right click the **PC** icon located above all your hard drives and directories
* in the new window, click **Advanced system settings**
* in the newest window, click **Environment Variables...**
* find the **PATH** variable, click **edit**
* add the following: *YOUR_ABSOLUTE_NODEJS_INSTALL_DIRECTORY/;* and *C:\Users\YOUR_USERNAME\AppData\Roaming\npm;*
* please note that all PATH variables must be separated with **;**

##### Ubuntu

* open up terminal
* `sudo apt-get install nvm`
* `nvm install 5.1`

### Install Node with nvm on any Unix(Linux, Mac...)
Node version manager (best practice): you can switch between Node version

curl https://raw.githubusercontent.com/creationix/nvm/v5.0.0/install.sh | bash         #grab version 4
source ~/.profile       # to get system aware of nvm - include nvm in $PATH = so you can use 'nvm' command in terminal
nvm ls 			# if you get error install git
apt-get install git, dnf/yum install git ....
# install any node version you want
nvm install v5.0.0
nvm install v5.1.0
node --version   	# node you're currently using
nvm use v 5.0.0 	# changes node version only in current terminal tab
nvm alias default v5.0.0  # now this version is set as system default 
so if you do not set it expclicitely v5 is set as default but you can override it - but only in terminal tab where you type "nvm use vX.y...."
elswhere (where you do not set it  expclicitely - v5.0.0 would be used

