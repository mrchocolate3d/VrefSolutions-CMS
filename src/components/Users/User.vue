<template>
    <tr>
      <th scope="user">1</th>
      <td>user.Firstname + " " + user.Lastname</td>
      <td>user.Email</td>
      <td>user.Username</td>
      <td>user.Role</td>
      <td>
        <button type="button" class="btn btn-primary"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
    </tr>    
</template>
    
    <script>
    export default {
      name: "User",
      props: {
        user: Object,
      },
    };
    </script>
    
    <style>
    </style>