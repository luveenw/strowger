# [Bazaarvoice Bootstrap](https://github.com/bazaarvoice/bvbootstrap)

Maintained by [Chris Garcia](chris.garcia@bazaarvoice.com), Bazaarvoice Bootstrap is lifted and branded from [Twitter Bootstrap](http://twitter.github.com/bootstrap).

To get started, check out its [documentation](http://design.bazaarvoice.com/docs).

## Usage from Bazaarvoice CDN

To the `<head>` of your document, add:  
```html
<link rel="shortcut icon" href="//d3dkbfc8v2zf4n.cloudfront.net/misc/favicon.ico">
<link rel="apple-touch-icon-precomposed" href="//d3dkbfc8v2zf4n.cloudfront.net/misc/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="//d3dkbfc8v2zf4n.cloudfront.net/misc/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="//d3dkbfc8v2zf4n.cloudfront.net/misc/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="//d3dkbfc8v2zf4n.cloudfront.net/misc/apple-touch-icon-57-precomposed.png">

<link rel="stylesheet" href="//d3dkbfc8v2zf4n.cloudfront.net/v2.1.3/css/bootstrap.min.css"/>
<link rel="stylesheet" href="//d3dkbfc8v2zf4n.cloudfront.net/v2.1.3/css/bootstrap-responsive.min.css"/>
```

And before the closing `</body>` tag, add: 
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="//d3dkbfc8v2zf4n.cloudfront.net/v2.1.3/js/bootstrap.min.js"></script>
```


## Quick start

Clone the repo, `git clone git://github.com/bazaarvoice/bvbootstrap.git`.


Known issues
------------

* Makefile doesn't work (you'll have to include the whole project for now)
* Integrating more js libraries and jquery plugins
* Shrinking-nav component is buggy
* Still converting example page


Versioning
----------

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

Please visit [SemVer](http://semver.org/) for more information.



Bug tracker
-----------

Have a bug?

Enter **Bugs**, **Feature Requests**, or **Contribution enquiries** [here](https://github.com/bazaarvoice/bvbootstrap/issues).


Contributing
------------

Please submit all pull requests against *-wip branches. If your pull request contains javascript patches or features, you must include relevant unit tests. Thanks!
