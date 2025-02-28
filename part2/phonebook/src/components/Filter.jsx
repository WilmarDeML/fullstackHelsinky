const Filter = ({ filter, changeFilter, text }) => (
  <>
    {text} <input type="text" value={filter} onChange={changeFilter} />
  </>
)

export default Filter