"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5078],{7673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(5893),i=n(1151);const s={title:"@call",description:"Using the call directive to enhance GraphQL schemas improving code reusability."},a=void 0,o={id:"operators/call",title:"@call",description:"Using the call directive to enhance GraphQL schemas improving code reusability.",source:"@site/docs/operators/call.md",sourceDirName:"operators",slug:"/operators/call",permalink:"/docs/operators/call",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/call.md",tags:[],version:"current",frontMatter:{title:"@call",description:"Using the call directive to enhance GraphQL schemas improving code reusability."},sidebar:"tutorialSidebar",previous:{title:"@cache",permalink:"/docs/operators/cache"},next:{title:"@const",permalink:"/docs/operators/const"}},c={},l=[{value:"query",id:"query",level:3},{value:"mutation",id:"mutation",level:3},{value:"args",id:"args",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@call"})," directive in GraphQL signifies a paradigm shift towards more efficient code structuring by introducing a methodology akin to function invocations in conventional programming. This directive is pivotal for developers navigating the intricacies of elaborate GraphQL schemas, where minimizing redundancy and adhering to the DRY (Don't Repeat Yourself) principle are paramount. Consider the following schema example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @upstream(baseURL: "https://jsonplaceholder.typicode.com") {\n  query: Query\n}\n\ntype Query {\n  # highlight-start\n  user(id: Int!): User @http(path: "/users/{{args.id}}")\n  # highlight-end\n  posts: [Post] @http(path: "/posts")\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  # highlight-start\n  user: User @http(path: "/users/{{value.userId}}")\n  # highlight-end\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In this schema, at lines ",(0,r.jsx)(t.code,{children:"7"})," and ",(0,r.jsx)(t.code,{children:"18"}),", a pattern of configuration duplication emerges when fetching user's data by it's id, demonstrating a prime use case for the ",(0,r.jsx)(t.code,{children:"@call"})," directive. Through refactoring the ",(0,r.jsx)(t.code,{children:"Post"})," type to incorporate the ",(0,r.jsx)(t.code,{children:"@call"})," directive, we can eliminate this redundancy."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  # highlight-start\n  user: User @call(query: "user", args: {id: "{{value.userId}}"})\n  # highlight-end\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Here, the ",(0,r.jsx)(t.code,{children:"@call"})," directive invokes the ",(0,r.jsx)(t.code,{children:"user"})," query from the ",(0,r.jsx)(t.code,{children:"Query"})," type, leveraging the data-fetching process that's already defined in the root ",(0,r.jsx)(t.code,{children:"query"}),". The ",(0,r.jsx)(t.code,{children:"query"})," parameter specifies the target field, while the ",(0,r.jsx)(t.code,{children:"args"})," parameter delineates the arguments to be passed."]}),"\n",(0,r.jsx)(t.h3,{id:"query",children:"query"}),"\n",(0,r.jsxs)(t.p,{children:["Specify the root ",(0,r.jsx)(t.strong,{children:"query"})," field to invoke, alongside the requisite arguments, using the ",(0,r.jsx)(t.code,{children:"@call"})," directive for a concise and efficient query structure."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  userId: Int!\n  user: User @call(query: "user", args: {id: "{{value.userId}}"})\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"mutation",children:"mutation"}),"\n",(0,r.jsxs)(t.p,{children:["Similarly, the ",(0,r.jsx)(t.code,{children:"@call"})," directive can facilitate calling a mutation from another mutation field, employing the ",(0,r.jsx)(t.code,{children:"mutation"})," parameter for field specification and the ",(0,r.jsx)(t.code,{children:"args"})," parameter for argument delineation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  insertPost(input: PostInput, overwrite: Boolean): Post\n    @http(body: "{{args.input}}", method: "POST", path: "/posts", query: {overwrite: "{{args.overwrite}}"})\n\n  upsertPost(input: PostInput): Post @call(mutation: "insertPost", args: {input: "{{args.input}}", overwrite: true})\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"args",children:"args"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"args"})," parameter in the ",(0,r.jsx)(t.code,{children:"@call"})," directive facilitates passing arguments to the targeted query or mutation, represented as a key-value mapping where each key corresponds to an argument name and its associated value."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  userId: Int!\n  user: User @call(query: "user", args: {"id": "{{value.userId}}"})\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@call"})," directive is predominantly advantageous in complex, large-scale configurations. For those new to GraphQL or Tailcall, it may be beneficial to explore this directive after familiarizing yourself with the foundational aspects of GraphQL."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);