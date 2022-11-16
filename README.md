# Ethereum Name Finding Service - Application

## How it works

The Ethereum Name Finding Service was built to help users quickly search through hundreds of similar .eth names and find the best one available to register.

Our search queries are based on regular expressions. If you are familiar with regex, then you can build your own custom queries to search whatever you can think of.

If you aren’t familiar with regular expressions, use the built-in buttons to create search queries. You can type out whatever name you would like and add special characters like “any number” or “any letter”. 

For example, if you wanted to check the availability of Vitalik followed by a number you would search “vitalik\d”. This would search the 10 names below:
vitalik0, vitalik1, vitalik2, vitalik3, vitalik4, vitalik5, vitalik6, vitalik7, vitalik8, vitalik9

We have our own backend database that is constantly being refreshed with the newest ENS data. This allows us to search through an extreme amount of names very quickly.

## FAQ
- What is the limit of names I can search in a query?
- Currently you can search queries of up to 1000 names long (contact us for larger needs)
- What are RegEx expressions?
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- How can I use your API for my custom solutions?
- How can I help?



## Contact Us:

This site has been built and maintained by 2 developers, Jack and Will. If you have any problems or questions about the site, please let us know. We will do the best we can to answer quickly!

- Twitter: @enfsdomains
- Email: needToPickAnEmail@email.com
- Other social: 


## Original info

The goal of this project is to create an ENS lookup service that can search thousands of different names with regular expressions.

Different expression ideas:

"TEXT" + (any number or letter) i.e. (TEXTa,TEXTb,TEXTc)<br>
"TEXT" + (any number or letter) + "TEXT" i.e. (TEXTaTEXT,TEXTbTEXT,TEXT1TEXT) <br>
- The above would both just allow a user to enter a * anywhere <br>

"TEXT" + (0 to 10 of a certain character) i.e. (TEXTA,TEXTAA,TEXTAAA) <br>

Other options:

- Different combinations of text
- Find the shortest name containing text
- 
