<template>
    <tr>
      <th scope="user">1</th>
      <td>company.Name</td>
      <td>company.Location</td>
      <td>
        <button type="button" class="btn btn-primary"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
    </tr>    
</template>
    
    <script>
    export default {
      name: "Company",
      props: {
        company: Object,
      },
    };
    </script>
    
    <style>
    </style>