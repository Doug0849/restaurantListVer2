function CheckForm() {
  if (confirm("Are you sure to delete ") === true)
    return true;
  else
    return false;
}   