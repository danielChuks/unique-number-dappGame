// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Elena(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Elena expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Elena expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v297, v298], secs: v300, time: v299, didSend: v40, from: v296 } = txn1;
  ;
  const v309 = stdlib.add(v299, v298);
  stdlib.protect(ctc1, await interact.acceptWager(v297), {
    at: './index.rsh:81:27:application',
    fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
    msg: 'acceptWager',
    who: 'Elena'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v296, v297, v298, v309],
    evt_cnt: 0,
    funcNum: 1,
    lct: v299,
    onlyIf: true,
    out_tys: [],
    pay: [v297, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v315, time: v314, didSend: v49, from: v313 } = txn2;
      
      const v317 = stdlib.add(v297, v297);
      sim_r.txns.push({
        amt: v297,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v318 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v319 = v314;
      const v326 = v317;
      
      if (await (async () => {
        const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v330;})()) {
        const v337 = stdlib.add(v319, v298);
        sim_r.isHalt = false;
        }
      else {
        const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
        const v460 = v457 ? v458 : v459;
        const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v462 = v456 ? v461 : v460;
        const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 0)];
        const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 1)];
        const v465 = stdlib.mul(v463, v297);
        sim_r.txns.push({
          amt: v465,
          kind: 'from',
          to: v296,
          tok: undefined /* Nothing */
          });
        const v470 = stdlib.mul(v464, v297);
        sim_r.txns.push({
          amt: v470,
          kind: 'from',
          to: v313,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v309],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v296, v297, v298, v309],
      evt_cnt: 0,
      funcNum: 2,
      lct: v299,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v297,
          kind: 'from',
          to: v296,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:56:31:application',
      fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Elena'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v315, time: v314, didSend: v49, from: v313 } = txn2;
    const v317 = stdlib.add(v297, v297);
    ;
    let v318 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v319 = v314;
    let v326 = v317;
    
    while (await (async () => {
      const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v330;})()) {
      const v337 = stdlib.add(v319, v298);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v337],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v296, v297, v298, v313, v326, v337],
          evt_cnt: 0,
          funcNum: 5,
          lct: v319,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
            
            ;
            const v441 = stdlib.addressEq(v313, v438);
            const v442 = stdlib.addressEq(v296, v438);
            const v443 = v441 ? true : v442;
            ;
            sim_r.txns.push({
              amt: v326,
              kind: 'from',
              to: v313,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
        ;
        const v441 = stdlib.addressEq(v313, v438);
        const v442 = stdlib.addressEq(v296, v438);
        const v443 = v441 ? true : v442;
        stdlib.assert(v443, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Elena'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeOut(), {
          at: './index.rsh:56:31:application',
          fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Elena'
          });
        
        return;
        
        }
      else {
        const {data: [v346], secs: v348, time: v347, didSend: v70, from: v345 } = txn3;
        ;
        const v349 = stdlib.addressEq(v296, v345);
        stdlib.assert(v349, {
          at: './index.rsh:98:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Elena'
          });
        const v356 = stdlib.add(v347, v298);
        const v360 = stdlib.protect(ctc0, await interact.getCard(), {
          at: './index.rsh:107:57:application',
          fs: ['at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)'],
          msg: 'getCard',
          who: 'Elena'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v296, v297, v298, v313, v326, v346, v356, v360],
          evt_cnt: 1,
          funcNum: 6,
          lct: v347,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:109:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v362], secs: v364, time: v363, didSend: v80, from: v361 } = txn4;
            
            ;
            const v365 = stdlib.addressEq(v313, v361);
            ;
            const v372 = stdlib.add(v363, v298);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v356],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v296, v297, v298, v313, v326, v346, v356],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
              
              ;
              const v423 = stdlib.addressEq(v313, v420);
              const v424 = stdlib.addressEq(v296, v420);
              const v425 = v423 ? true : v424;
              ;
              sim_r.txns.push({
                amt: v326,
                kind: 'from',
                to: v296,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
          ;
          const v423 = stdlib.addressEq(v313, v420);
          const v424 = stdlib.addressEq(v296, v420);
          const v425 = v423 ? true : v424;
          stdlib.assert(v425, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Elena'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:56:31:application',
            fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Elena'
            });
          
          return;
          
          }
        else {
          const {data: [v362], secs: v364, time: v363, didSend: v80, from: v361 } = txn4;
          ;
          const v365 = stdlib.addressEq(v313, v361);
          stdlib.assert(v365, {
            at: './index.rsh:109:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Elena'
            });
          const v372 = stdlib.add(v363, v298);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v372],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v296, v297, v298, v313, v326, v346, v362, v372],
              evt_cnt: 0,
              funcNum: 9,
              lct: v363,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
                
                ;
                const v405 = stdlib.addressEq(v313, v402);
                const v406 = stdlib.addressEq(v296, v402);
                const v407 = v405 ? true : v406;
                ;
                sim_r.txns.push({
                  amt: v326,
                  kind: 'from',
                  to: v313,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
            ;
            const v405 = stdlib.addressEq(v313, v402);
            const v406 = stdlib.addressEq(v296, v402);
            const v407 = v405 ? true : v406;
            stdlib.assert(v407, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Elena'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeOut(), {
              at: './index.rsh:56:31:application',
              fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeOut',
              who: 'Elena'
              });
            
            return;
            
            }
          else {
            const {data: [v377, v378], secs: v380, time: v379, didSend: v90, from: v376 } = txn5;
            ;
            const v381 = stdlib.addressEq(v296, v376);
            stdlib.assert(v381, {
              at: './index.rsh:118:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Elena'
              });
            const v382 = stdlib.digest(ctc3, [v377, v378]);
            const v383 = stdlib.digestEq(v346, v382);
            stdlib.assert(v383, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:121:22:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Elena'
              });
            let v384;
            const v385 = stdlib.eq(v378, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v386 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v387 = v385 ? v386 : false;
            if (v387) {
              v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              }
            else {
              if (v385) {
                v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              else {
                if (v386) {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              }
            const v390 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            if (v390) {
              stdlib.protect(ctc1, await interact.informDraw(), {
                at: './index.rsh:61:28:application',
                fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:29:function exp)', 'at ./index.rsh:127:21:application call to "informDraw" (defined at: ./index.rsh:59:25:function exp)'],
                msg: 'informDraw',
                who: 'Elena'
                });
              
              }
            else {
              }
            let v396;
            if (v387) {
              v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              }
            else {
              if (v385) {
                v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              else {
                if (v386) {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              }
            const cv318 = v396;
            const cv319 = v379;
            const cv326 = v326;
            
            v318 = cv318;
            v319 = cv319;
            v326 = cv326;
            
            continue;}
          
          }
        
        }
      
      }
    const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
    const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
    const v460 = v457 ? v458 : v459;
    const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
    const v462 = v456 ? v461 : v460;
    const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 0)];
    const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 1)];
    const v465 = stdlib.mul(v463, v297);
    ;
    const v470 = stdlib.mul(v464, v297);
    ;
    stdlib.protect(ctc1, await interact.viewResult(v318), {
      at: './index.rsh:66:28:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:29:function exp)', 'at ./index.rsh:143:13:application call to "viewResult" (defined at: ./index.rsh:64:31:function exp)'],
      msg: 'viewResult',
      who: 'Elena'
      });
    
    return;
    }
  
  
  
  };
export async function Klaus(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Klaus expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Klaus expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v292 = stdlib.protect(ctc0, interact.deadline, 'for Klaus\'s interact field deadline');
  const v293 = stdlib.protect(ctc0, interact.wager, 'for Klaus\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v293, v292],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:75:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v293, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v297, v298], secs: v300, time: v299, didSend: v40, from: v296 } = txn1;
      
      sim_r.txns.push({
        amt: v297,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v309 = stdlib.add(v299, v298);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v297, v298], secs: v300, time: v299, didSend: v40, from: v296 } = txn1;
  ;
  const v309 = stdlib.add(v299, v298);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v309],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v296, v297, v298, v309],
      evt_cnt: 0,
      funcNum: 2,
      lct: v299,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v297,
          kind: 'from',
          to: v296,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeOut(), {
      at: './index.rsh:56:31:application',
      fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Klaus'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v315, time: v314, didSend: v49, from: v313 } = txn2;
    const v317 = stdlib.add(v297, v297);
    ;
    let v318 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v319 = v314;
    let v326 = v317;
    
    while (await (async () => {
      const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v330;})()) {
      const v337 = stdlib.add(v319, v298);
      const v341 = stdlib.protect(ctc0, await interact.getCard(), {
        at: './index.rsh:94:47:application',
        fs: ['at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
        msg: 'getCard',
        who: 'Klaus'
        });
      const v342 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:95:60:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
        msg: 'random',
        who: 'Klaus'
        });
      const v343 = stdlib.digest(ctc1, [v342, v341]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v296, v297, v298, v313, v326, v337, v343],
        evt_cnt: 1,
        funcNum: 4,
        lct: v319,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:98:13:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v346], secs: v348, time: v347, didSend: v70, from: v345 } = txn3;
          
          ;
          const v349 = stdlib.addressEq(v296, v345);
          ;
          const v356 = stdlib.add(v347, v298);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v337],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v296, v297, v298, v313, v326, v337],
          evt_cnt: 0,
          funcNum: 5,
          lct: v319,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
            
            ;
            const v441 = stdlib.addressEq(v313, v438);
            const v442 = stdlib.addressEq(v296, v438);
            const v443 = v441 ? true : v442;
            ;
            sim_r.txns.push({
              amt: v326,
              kind: 'from',
              to: v313,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
        ;
        const v441 = stdlib.addressEq(v313, v438);
        const v442 = stdlib.addressEq(v296, v438);
        const v443 = v441 ? true : v442;
        stdlib.assert(v443, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Klaus'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeOut(), {
          at: './index.rsh:56:31:application',
          fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Klaus'
          });
        
        return;
        
        }
      else {
        const {data: [v346], secs: v348, time: v347, didSend: v70, from: v345 } = txn3;
        ;
        const v349 = stdlib.addressEq(v296, v345);
        stdlib.assert(v349, {
          at: './index.rsh:98:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Klaus'
          });
        const v356 = stdlib.add(v347, v298);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v356],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v296, v297, v298, v313, v326, v346, v356],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
              
              ;
              const v423 = stdlib.addressEq(v313, v420);
              const v424 = stdlib.addressEq(v296, v420);
              const v425 = v423 ? true : v424;
              ;
              sim_r.txns.push({
                amt: v326,
                kind: 'from',
                to: v296,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
          ;
          const v423 = stdlib.addressEq(v313, v420);
          const v424 = stdlib.addressEq(v296, v420);
          const v425 = v423 ? true : v424;
          stdlib.assert(v425, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Klaus'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeOut(), {
            at: './index.rsh:56:31:application',
            fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Klaus'
            });
          
          return;
          
          }
        else {
          const {data: [v362], secs: v364, time: v363, didSend: v80, from: v361 } = txn4;
          ;
          const v365 = stdlib.addressEq(v313, v361);
          stdlib.assert(v365, {
            at: './index.rsh:109:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Klaus'
            });
          const v372 = stdlib.add(v363, v298);
          const txn5 = await (ctc.sendrecv({
            args: [v296, v297, v298, v313, v326, v346, v362, v372, v342, v341],
            evt_cnt: 2,
            funcNum: 8,
            lct: v363,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:118:13:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v377, v378], secs: v380, time: v379, didSend: v90, from: v376 } = txn5;
              
              ;
              const v381 = stdlib.addressEq(v296, v376);
              ;
              const v382 = stdlib.digest(ctc1, [v377, v378]);
              const v383 = stdlib.digestEq(v346, v382);
              ;
              let v384;
              const v385 = stdlib.eq(v378, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v386 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v387 = v385 ? v386 : false;
              if (v387) {
                v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                if (v385) {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  if (v386) {
                    v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                    }
                  else {
                    v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  }
                }
              const v390 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              if (v390) {
                
                }
              else {
                }
              let v396;
              if (v387) {
                v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                if (v385) {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  if (v386) {
                    v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                    }
                  else {
                    v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  }
                }
              const cv318 = v396;
              const cv319 = v379;
              const cv326 = v326;
              
              await (async () => {
                const v318 = cv318;
                const v319 = cv319;
                const v326 = cv326;
                
                if (await (async () => {
                  const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  
                  return v330;})()) {
                  const v337 = stdlib.add(v319, v298);
                  sim_r.isHalt = false;
                  }
                else {
                  const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
                  const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                  const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
                  const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
                  const v460 = v457 ? v458 : v459;
                  const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                  const v462 = v456 ? v461 : v460;
                  const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 0)];
                  const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 1)];
                  const v465 = stdlib.mul(v463, v297);
                  sim_r.txns.push({
                    amt: v465,
                    kind: 'from',
                    to: v296,
                    tok: undefined /* Nothing */
                    });
                  const v470 = stdlib.mul(v464, v297);
                  sim_r.txns.push({
                    amt: v470,
                    kind: 'from',
                    to: v313,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v372],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v296, v297, v298, v313, v326, v346, v362, v372],
              evt_cnt: 0,
              funcNum: 9,
              lct: v363,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
                
                ;
                const v405 = stdlib.addressEq(v313, v402);
                const v406 = stdlib.addressEq(v296, v402);
                const v407 = v405 ? true : v406;
                ;
                sim_r.txns.push({
                  amt: v326,
                  kind: 'from',
                  to: v313,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
            ;
            const v405 = stdlib.addressEq(v313, v402);
            const v406 = stdlib.addressEq(v296, v402);
            const v407 = v405 ? true : v406;
            stdlib.assert(v407, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Klaus'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeOut(), {
              at: './index.rsh:56:31:application',
              fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeOut',
              who: 'Klaus'
              });
            
            return;
            
            }
          else {
            const {data: [v377, v378], secs: v380, time: v379, didSend: v90, from: v376 } = txn5;
            ;
            const v381 = stdlib.addressEq(v296, v376);
            stdlib.assert(v381, {
              at: './index.rsh:118:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Klaus'
              });
            const v382 = stdlib.digest(ctc1, [v377, v378]);
            const v383 = stdlib.digestEq(v346, v382);
            stdlib.assert(v383, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:121:22:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Klaus'
              });
            let v384;
            const v385 = stdlib.eq(v378, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v386 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v387 = v385 ? v386 : false;
            if (v387) {
              v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              }
            else {
              if (v385) {
                v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              else {
                if (v386) {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              }
            const v390 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            if (v390) {
              stdlib.protect(ctc3, await interact.informDraw(), {
                at: './index.rsh:61:28:application',
                fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:29:function exp)', 'at ./index.rsh:127:21:application call to "informDraw" (defined at: ./index.rsh:59:25:function exp)'],
                msg: 'informDraw',
                who: 'Klaus'
                });
              
              }
            else {
              }
            let v396;
            if (v387) {
              v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              }
            else {
              if (v385) {
                v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              else {
                if (v386) {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              }
            const cv318 = v396;
            const cv319 = v379;
            const cv326 = v326;
            
            v318 = cv318;
            v319 = cv319;
            v326 = cv326;
            
            continue;}
          
          }
        
        }
      
      }
    const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
    const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
    const v460 = v457 ? v458 : v459;
    const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
    const v462 = v456 ? v461 : v460;
    const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 0)];
    const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, 1)];
    const v465 = stdlib.mul(v463, v297);
    ;
    const v470 = stdlib.mul(v464, v297);
    ;
    stdlib.protect(ctc3, await interact.viewResult(v318), {
      at: './index.rsh:66:28:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:29:function exp)', 'at ./index.rsh:143:13:application call to "viewResult" (defined at: ./index.rsh:64:31:function exp)'],
      msg: 'viewResult',
      who: 'Klaus'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAFQCAUJIAcCKHiAAVgwJgMBAAEBACI1ADEYQQUNKmRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEEDEACVkkhBwxAAWFJJQxAAQhJIQUMQABWIQUSRCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQtbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBCVIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4lWzX9gAQ1GirQNP4WUDT9FlCwMgY0AyELWwxENP8xABJENANXWCA0/hY0/RZQARJENP0iEjX8NAMhClsiEjX7NPw0+xBBAAYjNfpCABo0/EEABiI1+kIADzT7QQAHIQg1+kIAAyM1+jT/NAMhBls0AyEJWzQDVzAgNPoyBjQDJFtCAsZIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDQDVzAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IDJ0mBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEFNQEyBjUCQgKlSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAjlJIQgMQADRSYEEDEAAiUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEJWzX9VzAgNfwkWzX7STUFNfqABDiwIy00+lCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUChLAVcAf2cpSwFXfwFnSCEHNQEyBjUCQgG+IQgSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEGW7III7IQNANXACCyB7NCAWFJIwxAAEhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwMgY0AyENWwxENP+IAYQ0A1cAIDT/NAMhCVsxACMyBjT/SQhCAF9IIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsIGgjQaIATk0/4gBNDIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIA0DX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEENQEyBjUCQgCMgBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0hCBJNgBAAAAAAAAAAAgAAAAAAAAAANP0iEk01+LEisgE0+CJbNPoLsggjshA0+bIHs7EisgE0+CVbNPoLsggjshA0/LIHs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v298",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v298",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v362",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v362",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c7238038062001c72833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611956806200031c6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461156f565b610197565b6100a16100e836600461156f565b61032c565b3480156100f957600080fd5b506001546100b4565b6100a1610110366004611592565b6104a8565b6100a161012336600461156f565b610732565b6100a161013636600461156f565b6108cb565b6100a161014936600461156f565b610b70565b34801561015a57600080fd5b50610163610db8565b6040516100be9291906115a4565b6100a161017f36600461156f565b610e55565b6100a161019236600461156f565b610fea565b6101a7600160005414600961113e565b6101c1813515806101ba57506001548235145b600a61113e565b6000808055600280546101d390611601565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611601565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611652565b905061027781606001514310600b61113e565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516102a691906116cb565b60405180910390a16102bf81602001513414600861113e565b6102c7611393565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251610315908061170b565b60208201516040015261032781611163565b505050565b61033c600160005414600d61113e565b6103568135158061034f57506001548235145b600e61113e565b60008080556002805461036890611601565b80601f016020809104026020016040519081016040528092919081815260200182805461039490611601565b80156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b50505050508060200190518101906103f99190611652565b905061040d8160600151431015600f61113e565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161043c91906116cb565b60405180910390a16104503415600c61113e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561048d573d6000803e3d6000fd5b50600080805560018190556104a4906002906113ec565b5050565b6104b8600960005414602761113e565b6104d2813515806104cb57506001548235145b602861113e565b6000808055600280546104e490611601565b80601f016020809104026020016040519081016040528092919081815260200182805461051090611601565b801561055d5780601f106105325761010080835404028352916020019161055d565b820191906000526020600020905b81548152906001019060200180831161054057829003601f168201915b50505050508060200190518101906105759190611723565b60408051606081018252600080825260208201819052918101919091529091506105a68260e001514310602961113e565b604080518435815260208086013590820152848201358183015290517f41b6d8e223fb0a5cfe68af9f34b07a5a94b63517841457ccfc53fb18b8e41fde9181900360600190a16105f83415602461113e565b8151610610906001600160a01b03163314602561113e565b6040805161065c9161063691602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661113e565b60408301351580825260c083015115602083015261067b576000610681565b80602001515b1561069257600160408201526106c3565b8051156106a557600060408201526106c3565b8060200151156106bb57600260408201526106c3565b600160408201525b6106cb611393565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283820151818401805191909152805143920191909152608085015190519091015261072c81611163565b50505050565b610742600560005414601761113e565b61075c8135158061075557506001548235145b601861113e565b60008080556002805461076e90611601565b80601f016020809104026020016040519081016040528092919081815260200182805461079a90611601565b80156107e75780601f106107bc576101008083540402835291602001916107e7565b820191906000526020600020905b8154815290600101906020018083116107ca57829003601f168201915b50505050508060200190518101906107ff91906117cf565b90506108138160a00151431015601961113e565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de88260405161084291906116cb565b60405180910390a16108563415601561113e565b606081015161088a906001600160a01b031633146108805781516001600160a01b03163314610883565b60015b601661113e565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561048d573d6000803e3d6000fd5b6108db600760005414601c61113e565b6108f5813515806108ee57506001548235145b601d61113e565b60008080556002805461090790611601565b80601f016020809104026020016040519081016040528092919081815260200182805461093390611601565b80156109805780601f1061095557610100808354040283529160200191610980565b820191906000526020600020905b81548152906001019060200180831161096357829003601f168201915b50505050508060200190518101906109989190611863565b90506109b06040518060200160405280600081525090565b6109c18260c001514310601e61113e565b6040805184358152602080860135908201527f47a1195f23e4ca8f87a7a744a702eeb3eb5b0d56dae31e23931e0349a611c709910160405180910390a1610a0a3415601a61113e565b6060820151610a25906001600160a01b03163314601b61113e565b6040820151610a34904361170b565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610b459183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b69929190611429565b5050505050565b610b80600560005414601261113e565b610b9a81351580610b9357506001548235145b601361113e565b600080805560028054610bac90611601565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd890611601565b8015610c255780601f10610bfa57610100808354040283529160200191610c25565b820191906000526020600020905b815481529060010190602001808311610c0857829003601f168201915b5050505050806020019051810190610c3d91906117cf565b9050610c556040518060200160405280600081525090565b610c668260a001514310601461113e565b6040805184358152602080860135908201527f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f910160405180910390a1610caf3415601061113e565b8151610cc7906001600160a01b03163314601161113e565b6040820151610cd6904361170b565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610b45565b600060606000546002808054610dcd90611601565b80601f0160208091040260200160405190810160405280929190818152602001828054610df990611601565b8015610e465780601f10610e1b57610100808354040283529160200191610e46565b820191906000526020600020905b815481529060010190602001808311610e2957829003601f168201915b50505050509050915091509091565b610e65600760005414602161113e565b610e7f81351580610e7857506001548235145b602261113e565b600080805560028054610e9190611601565b80601f0160208091040260200160405190810160405280929190818152602001828054610ebd90611601565b8015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050505050806020019051810190610f229190611863565b9050610f368160c00151431015602361113e565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610f6591906116cb565b60405180910390a1610f793415601f61113e565b6060810151610fad906001600160a01b03163314610fa35781516001600160a01b03163314610fa6565b60015b602061113e565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561048d573d6000803e3d6000fd5b610ffa600960005414602c61113e565b6110148135158061100d57506001548235145b602d61113e565b60008080556002805461102690611601565b80601f016020809104026020016040519081016040528092919081815260200182805461105290611601565b801561109f5780601f106110745761010080835404028352916020019161109f565b820191906000526020600020905b81548152906001019060200180831161108257829003601f168201915b50505050508060200190518101906110b79190611723565b90506110cb8160e00151431015602e61113e565b7fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b0003826040516110fa91906116cb565b60405180910390a161110e3415602a61113e565b606081015161088a906001600160a01b031633146111385781516001600160a01b0316331461113b565b60015b602b5b816104a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b61116b6114ad565b6020820151516001141561127e578151604001516020808401510151611191919061170b565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061072c929190611429565b60208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051919091525182015282015151156112de576020820151516002146112d45780604001516112e4565b80602001516112e4565b80606001515b608082018190528251805160209091015191516001600160a01b03909116916108fc916113119190611901565b6040518115909202916000818181858888f19350505050158015611339573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc83600001516020015183608001516020015161136b9190611901565b6040518115909202916000818181858888f1935050505015801561048d573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016113e760405180606001604052806000815260200160008152602001600081525090565b905290565b5080546113f890611601565b6000825580601f10611408575050565b601f0160209004906000526020600020908101906114269190611542565b50565b82805461143590611601565b90600052602060002090601f016020900481019282611457576000855561149d565b82601f1061147057805160ff191683800117855561149d565b8280016001018555821561149d579182015b8281111561149d578251825591602001919060010190611482565b506114a9929150611542565b5090565b6040518060a00160405280600081526020016114dc604051806040016040528060008152602001600081525090565b81526020016114fe604051806040016040528060008152602001600081525090565b8152602001611520604051806040016040528060008152602001600081525090565b81526020016113e7604051806040016040528060008152602001600081525090565b5b808211156114a95760008155600101611543565b60006040828403121561156957600080fd5b50919050565b60006040828403121561158157600080fd5b61158b8383611557565b9392505050565b60006060828403121561156957600080fd5b82815260006020604081840152835180604085015260005b818110156115d8578581018301518582016060015282016115bc565b818111156115ea576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061161557607f821691505b6020821081141561156957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461164d57600080fd5b919050565b60006080828403121561166457600080fd5b6040516080810181811067ffffffffffffffff8211171561169557634e487b7160e01b600052604160045260246000fd5b6040526116a183611636565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b813581526040810160208301358015158082146116e757600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561171e5761171e6116f5565b500190565b600061010080838503121561173757600080fd5b6040519081019067ffffffffffffffff8211818310171561176857634e487b7160e01b600052604160045260246000fd5b8160405261177584611636565b8152602084015160208201526040840151604082015261179760608501611636565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c082840312156117e157600080fd5b60405160c0810181811067ffffffffffffffff8211171561181257634e487b7160e01b600052604160045260246000fd5b60405261181e83611636565b8152602083015160208201526040830151604082015261184060608401611636565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561187557600080fd5b60405160e0810181811067ffffffffffffffff821117156118a657634e487b7160e01b600052604160045260246000fd5b6040526118b283611636565b815260208301516020820152604083015160408201526118d460608401611636565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600081600019048311821515161561191b5761191b6116f5565b50029056fea26469706673582212200376ff9e8faa6002ce0156a35e1a3c39f95a9bdf1c375f40bbddd49ad266a44964736f6c634300080c0033`,
  BytecodeLen: 7282,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:145:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:90:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:100:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:111:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Elena": Elena,
  "Klaus": Klaus
  };
export const _APIs = {
  };
