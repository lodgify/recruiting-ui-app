export const filterDataByGuestName = (data, searchKeyword) =>
  data && searchKeyword && searchKeyword !== ''
    ? data.filter(item =>
        item.guestName.toLowerCase().includes(searchKeyword.toLowerCase()),
      )
    : data;
