# webpage-wacoco-storybook

These are some of the nowle components built with React and Storybook.
## Install and run
```bash
npm i
npm run storybook
```

## Publish components

```bash
git commit .
git commit -m "Ready for release"
npm version patch/minor/major
git push
```

## Consumption of components

> Add a read only token in your ~/.npmrc, you will receive the token from owner of library.

```bash
cd ~
cd <PROJECT>
echo >> ~/.npmrc "//registry.npmjs.org/:_authToken=<MYTOKEN> #keep the token secret!
npm install @wacoco/webpage-components
```




WACOCO company's web page project


## Process

```mermaid
flowchart TD
    A(Start) --> B(Testing)
    B --> B1[Write unit tests for React components using Jest and React Testing Library]
    B --> B2[Conduct end-to-end testing with Cypress]
    B --> B3[Perform accessibility audits with Axe or Lighthouse]
    B --> C(Deployment)
    C --> C1[Set up CI/CD pipelines for automated testing and deployment]
    C --> C2[Configure build scripts to optimize assets]
    C --> C3[Use Webpack or Babel for bundling and transpiling]
    C --> C4[Enable automatic deployment from Git to hosting platform]
    C --> C5[Implement continuous monitoring and logging]
    C --> D(SEO and Analytics Integration)
    D --> D1[Implement SEO best practices]
    D --> D2[Integrate analytics tools like Google Analytics]
    D --> D3[Ensure site crawlability with sitemap and robots.txt]
    D --> E(Security Checklist)
    E --> E1[Secure data transmission with HTTPS]
    E --> E2[Implement CSP headers to mitigate XSS attacks]
    E --> E3[Sanitize and validate user inputs]
    E --> E4[Regularly update dependencies]
    E --> F(Backless Approach)
    F --> F1[Optimize static assets and server configurations]
    F --> F2[Implement serverless architecture]
    F --> F3[Utilize a CDN for content delivery]
    F --> F4[Monitor and scale serverless functions dynamically]
    F --> G(End)
```

