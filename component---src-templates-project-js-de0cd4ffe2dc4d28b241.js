(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1oc3":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("tHN7"),c=(a("v9g0"),a("IUqM")),l=function(e){var t=c.data.allFile.edges.find((function(t){return t.node.relativePath===e}));if(void 0===t)throw"Unable to find image: "+e+" (in content/images)";return t.node.childImageSharp},p=a("5hye"),s=o.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1rax0fm-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),g=o.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1rax0fm-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),d=o.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1rax0fm-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.6);"],p.a.white);t.a=function(e){var t=Object(i.a)().siteCover,a=l(t).fluid,n=e.heroImg||a.src;return r.a.createElement(s,{style:{backgroundImage:'url("'+n+'")'}},r.a.createElement(g,null,r.a.createElement(d,null,e.title)))}},GhMY:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),i=a("1oc3"),c=a("mc/u"),l=a("eJDc"),p=a("EYWl");t.default=function(e){var t=e.data.markdownRemark,a=e.pageContext,n=a.previous,s=a.next;return r.a.createElement(o.a,{location:e.location},r.a.createElement(p.a,{title:t.frontmatter.title,description:t.excerpt,cover:t.frontmatter.cover&&t.frontmatter.cover.publicURL,lang:t.frontmatter.language,path:t.frontmatter.slug,isBlogPost:!0}),r.a.createElement(i.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL,title:t.frontmatter.title}),r.a.createElement(c.a,{post:t}),r.a.createElement(l.a,{previous:n,next:s}))};var s="1606132065"},IUqM:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"relativePath":"gatsby-icon.png","childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=","tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M173%201A201%20201%200%200023%20294a200%20200%200%2000377-78c1%201%201-7%201-17l-1-15-2-9A201%20201%200%2000173%201m5%2043A158%20158%200%200047%20164c0%201%2042%2044%2094%2095l94%2094%208-2a158%20158%200%2000114-148v-3H257v28h34l34%201a127%20127%200%2001-72%2087l-10%205-82-82-82-83a128%20128%200%2001221-36l5%205%2011-8%2010-9c2-2-25-29-37-38-18-11-37-20-57-24-11-2-44-4-54-2M43%20212a156%20156%200%2000148%20144h6l-76-76-77-77-1%209\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"width":400,"height":400,"src":"/static/4a9773549091c227cd2eb82ccd9c5e3a/497c6/gatsby-icon.png","srcSet":"/static/4a9773549091c227cd2eb82ccd9c5e3a/497c6/gatsby-icon.png 1x","srcWebp":"/static/4a9773549091c227cd2eb82ccd9c5e3a/1f5c5/gatsby-icon.webp","srcSetWebp":"/static/4a9773549091c227cd2eb82ccd9c5e3a/1f5c5/gatsby-icon.webp 1x","originalName":"gatsby-icon.png"},"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=","tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M173%201A201%20201%200%200023%20294a200%20200%200%2000377-78c1%201%201-7%201-17l-1-15-2-9A201%20201%200%2000173%201m5%2043A158%20158%200%200047%20164c0%201%2042%2044%2094%2095l94%2094%208-2a158%20158%200%2000114-148v-3H257v28h34l34%201a127%20127%200%2001-72%2087l-10%205-82-82-82-83a128%20128%200%2001221-36l5%205%2011-8%2010-9c2-2-25-29-37-38-18-11-37-20-57-24-11-2-44-4-54-2M43%20212a156%20156%200%2000148%20144h6l-76-76-77-77-1%209\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/4a9773549091c227cd2eb82ccd9c5e3a/bc59e/gatsby-icon.png","srcSet":"/static/4a9773549091c227cd2eb82ccd9c5e3a/69585/gatsby-icon.png 200w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/497c6/gatsby-icon.png 400w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/bc59e/gatsby-icon.png 512w","srcWebp":"/static/4a9773549091c227cd2eb82ccd9c5e3a/a3e81/gatsby-icon.webp","srcSetWebp":"/static/4a9773549091c227cd2eb82ccd9c5e3a/61e93/gatsby-icon.webp 200w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/1f5c5/gatsby-icon.webp 400w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/a3e81/gatsby-icon.webp 512w","sizes":"(max-width: 512px) 100vw, 512px","originalImg":"/static/4a9773549091c227cd2eb82ccd9c5e3a/bc59e/gatsby-icon.png","originalName":"gatsby-icon.png","presentationWidth":512,"presentationHeight":512}}}},{"node":{"relativePath":"icon.svg","childImageSharp":null}}]}}}')},JIEu:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},KE4F:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("b9pq"),c=a("5hye");var l=o.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-1iwz16t-0"})(["margin-bottom:2rem;color:",";"],c.a.textLight),p=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.date,a=e.tags;return r.a.createElement(l,null,t&&r.a.createElement("time",null,t),Array.isArray(a)&&a.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("span",null," in"),r.a.createElement(i.a,{tags:a})))},o}(r.a.Component),s=o.b.div.withConfig({displayName:"Content__ContentBody",componentId:"lroi0l-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px solid rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:",";display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid ",";}& p > code.language-text,& li > code.language-text{background:",";color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#e8e8e8;border-bottom:2px solid ",";}}"],c.a.highlight_code_linebg,c.a.highlight_code_bg,c.a.highlight_code_oneline,c.a.white);t.a=function(e){var t=e.content,a=e.date,n=e.tags;return r.a.createElement("section",null,(n||a)&&r.a.createElement(p,{date:a,tags:n}),r.a.createElement(s,{dangerouslySetInnerHTML:{__html:t}}))}},Kbi2:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},b9pq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("vOnD"),c=a("5hye");var l=i.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"gxehxa-0"})(["display:inline;margin:0 0.5rem 0 0;color:",";"],c.a.textLight),p=Object(i.b)(o.Link).withConfig({displayName:"TagList__TagListItem",componentId:"gxehxa-1"})(["margin-left:0.3rem;color:",";&:hover{border-bottom:1px solid ",";}&:before{content:'#';}"],c.a.textLight,c.a.textLight),s=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tags,a=e.icon;return r.a.createElement(l,null,!0===a&&r.a.createElement(n.Fragment,null,"🏷 "),t.map((function(e,a){return r.a.createElement(n.Fragment,{key:"tag-list-"+a},r.a.createElement(p,{to:"/tags/"+e},e),a<t.length-1?", ":"")})))},o}(r.a.Component);t.a=s},eJDc:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("lPjh"),i=a("LObP");var c=function(e){var t,a;function c(){return e.apply(this,arguments)||this}return a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,c.prototype.render=function(){var e=this.props,t=[e.previous,e.next].filter((function(e){return e})).map((function(e){return{node:e}}));return r.a.createElement(n.Fragment,null,r.a.createElement(i.c,null,"Read next:"),r.a.createElement(o.a,{posts:t}))},c}(r.a.Component);t.a=c},kSEI:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("Kbi2"),c=a.n(i),l=a("JIEu"),p=a.n(l);var s=o.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-7atnvb-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.language,t="en"===e?c.a:p.a,a="en"===e?"english post":"post en francais";return r.a.createElement(s,{src:t,alt:a,className:"flag"})},n}(r.a.Component);t.a=g},lPjh:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("LObP"),c=a("kSEI"),l=a("tHN7"),p=o.b.li.withConfig({displayName:"RelatedPosts__PostPreviewShort",componentId:"sc-1latjxt-0"})(["margin:18px 0 6px;"]),s=o.b.div.withConfig({displayName:"RelatedPosts__PostDate",componentId:"sc-1latjxt-1"})(["font-size:.875rem;font-style:italic;"]);t.a=function(e){var t=e.posts,a=Object(l.a)().multilangPosts;return r.a.createElement("ul",null,t.map((function(e){var t=e.node.frontmatter,n=t.title,o=t.slug,l=t.date,g=e.node.frontmatter.language||"en";return r.a.createElement(p,{key:o},r.a.createElement(s,null,l&&r.a.createElement("time",null,l)),r.a.createElement(i.b,{to:"/"+o},a&&r.a.createElement(c.a,{language:g}),n))})))}},"mc/u":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("KE4F");var c=o.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"sc-1vowr7m-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.post;return r.a.createElement(c,null,r.a.createElement(i.a,{content:e.html,date:e.frontmatter.date,tags:e.frontmatter.tags}))},n}(r.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-templates-project-js-de0cd4ffe2dc4d28b241.js.map