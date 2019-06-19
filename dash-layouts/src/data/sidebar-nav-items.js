export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/foo",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Foo",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/foo"
    }
  ];
}
