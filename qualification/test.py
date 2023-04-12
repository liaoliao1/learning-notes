import requests


res = requests.get('https://api-ddc-wscn.awtmt.com/market/real?fields=symbol%2Cen_name%2Cprod_name%2Clast_px%2Cpx_change%2Cpx_change_rate%2Chigh_px%2Clow_px%2Copen_px%2Cpreclose_px%2Cmarket_value%2Cturnover_volume%2Cturnover_ratio%2Cturnover_value%2Cdyn_pb_rate%2Camplitude%2Cdyn_pe%2Ctrade_status%2Ccirculation_value%2Cupdate_time%2Cprice_precision%2Cweek_52_high%2Cweek_52_low%2Cstatic_pe%2Csource&prod_code=873169.BJ')
print(res)