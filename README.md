# Welcome to Re.Now
 - This is the working space of the Re.Now landing space.
 - Team members only.

## Guidelines
### Contribute
---
 - Let's keep things simple and just follow the [github flow].
 >> In short, that is to say whenever you want to fix bugs, build features and make any changes, you create a new branch from the master.   
 >> After you made your changes, commit, push and open a pull request, then I'll review and merge it for you :)

 - Please modify the [custom.scss] file only when changing the styles, leave all the css files alone.

### Frameworks
---
 - We used bootstrap, most elements and templates are from the [MDB].
 - The deploy is done with a [gulp] pipeline.

  [github flow]: https://guides.github.com/introduction/flow/
  [custom.scss]: /src/sass/mdb/custom.scss
  [MDB]: https://mdbootstrap.com/
  [gulp]: https://gulpjs.com/

### gh-pages
---
 - The live landing page is served with the orphan gh-pages branch (which contains only the dist folder). 
 - To deploy the new version, subtree push the dist folder on gh-pages branch.
 
 **Please do NOT do this unless specifically instructed to**
 
```
	git subtree push --prefix dist origin gh-pages
```

### For newbies
---
 - Clone the repo on your device.
 - git pull
 - npm install
 - gulp (Should be able to see the page live on local host)
 - Make your changes (Should be able to see live changes when the files are saved)
 - Commit
 - Push
 - Open pull request

### Contact
 ---
 - fb group: https://www.facebook.com/ReNowHub/
 - twitter: https://twitter.com/ReNowHub
 - LinkedIn: https://www.linkedin.com/company/13574428/
 - email: writetorenow@gmail.com
 - website: https://www.producthunt.com/upcoming/renow
